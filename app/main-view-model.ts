import { Observable } from '@nativescript/core';
import { BluetoothService } from './services/bluetooth.service';

export class MainViewModel extends Observable {
  private bluetoothService: BluetoothService;
  private _isScanning: boolean = false;
  private _devices: any[] = [];

  constructor() {
    super();
    this.bluetoothService = new BluetoothService();
    this.initialize();
  }

  get isConnected(): boolean {
    return this.bluetoothService.isConnected;
  }

  get isScanning(): boolean {
    return this._isScanning;
  }

  get devices(): any[] {
    return this._devices;
  }

  get deviceData() {
    return this.bluetoothService.deviceData;
  }

  private async initialize() {
    const initialized = await this.bluetoothService.initialize();
    if (!initialized) {
      console.error('Failed to initialize Bluetooth');
    }
  }

  async startScan() {
    this._isScanning = true;
    this.notifyPropertyChange('isScanning', true);
    
    this._devices = await this.bluetoothService.scanForDevices();
    this.notifyPropertyChange('devices', this._devices);
    
    this._isScanning = false;
    this.notifyPropertyChange('isScanning', false);
  }

  async connectToDevice(deviceUUID: string) {
    await this.bluetoothService.connect(deviceUUID);
  }

  async disconnect() {
    await this.bluetoothService.disconnect();
  }
}