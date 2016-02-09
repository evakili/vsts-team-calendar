

export function trackPageView(name?: string, properties?: any) {
     VSS.getService("willsmythe.team-calendar.telemetry-service").then((ts: TelemetryService) => {
        ts.trackPageView(name, properties);        
     });          
}


export function trackEvent(name: string, properties?: any) {
     VSS.getService("willsmythe.team-calendar.telemetry-service").then((ts: TelemetryService) => {
        ts.trackEvent(name, properties);        
     });          
}

export class TelemetryService {
    
    private _ai : any;
       
    constructor(context?) {        
        //console.log("telemetry web context " + JSON.stringify(VSS.getContribution(), null, 2));
        
        var props = VSS.getContribution().properties;
        
        this._ai = ($(window) as any).appInsights;
        
        
        // Initialize AI      
        this._ai.config.instrumentationKey = props.instrumentationKey;        
        this._ai.setAuthenticatedUserContext(VSS.getWebContext().user.id, VSS.getWebContext().collection.id);
        
        console.log(JSON.stringify(this._ai, null, 2));            
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

