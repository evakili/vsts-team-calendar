export class TelemetryHelper {
    
    private _serviceId: string;
    
    constructor(serviceId: string) {
        this._serviceId = serviceId;
    }
    
    trackPageView(name?: string, properties?: any) {
        VSS.getService(this._serviceId).then((ts: TelemetryService) => {
            ts.trackPageView(name, properties);
        });
    }

    trackEvent(name: string, properties?: any) {
        VSS.getService(this._serviceId).then((ts: TelemetryService) => {
            ts.trackEvent(name, properties);
        });
    }
    
}

export class TelemetryService {

    private _ai: any;

    constructor(appInsights) {
        this._ai = appInsights
    }

    trackPageView(name?: string, properties?: any) {
        if (this._ai) {
            this._ai.trackPageView(name, properties);
        }
    }

    trackEvent(name: string, properties?: any) {
        if (this._ai) {
            this._ai.trackEvent(name, properties);
        }
    }
}

