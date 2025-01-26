import { Observable } from '@nativescript/core';
import * as Bluetooth from 'nativescript-bluetooth';

export class BluetoothService extends Observable {
  private _isConnected: boolean = false;
  private _deviceData = {
    speed: 0,
    voltage: 0,
    current: 0,
    power: 0,
    temperature: 0,
    batteryLevel: 0
  };

  constructor() {
    super();
  }

  get isConnected(): boolean {
    return this._isConnected;
  }

  get deviceData() {
    return this._deviceData;
  }

  async initialize(): Promise<boolean> {
    try {
      const hasPermission = await Bluetooth.hasCoarseLocationPermission();
      if (!hasPermission) {
        await Bluetooth.requestCoarseLocationPermission();
      }
      return true;
    } catch (error) {
      console.error('Bluetooth initialization failed:', error);
      return false;
    }
  }

  async scanForDevices(): Promise<any[]> {
    try {
      const devices = await Bluetooth.startScanning({
        seconds: 4,
        onDiscovered: (peripheral) => {
          console.log('Discovered peripheral:', peripheral.UUID);
        }
      });
      return devices;
    } catch (error) {
      console.error('Scanning failed:', error);
      return [];
    }
  }

  async connect(deviceUUID: string): Promise<boolean> {
    try {
      await Bluetooth.connect({
        UUID: deviceUUID,
        onConnected: (peripheral) => {
          this._isConnected = true;
          this.notifyPropertyChange('isConnected', true);
          console.log('Connected to device:', peripheral.UUID);
          this.startDataNotifications(peripheral);
        },
        onDisconnected: () => {
          this._isConnected = false;
          this.notifyPropertyChange('isConnected', false);
        }
      });
      return true;
    } catch (error) {
      console.error('Connection failed:', error);
      return false;
    }
  }

  private startDataNotifications(peripheral: any) {
    // TODO: Implement VESC-specific characteristic notifications
    // This will need to be customized based on the VESC BLE service and characteristic UUIDs
  }

  async disconnect(): Promise<void> {
    if (this._isConnected) {
      await Bluetooth.disconnect();
    }
  }
}