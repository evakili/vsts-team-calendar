
export function trackEvent(eventName: string) {
    console.log("on track event");
    var ai = (window as any).appInsights;
    console.log("track event: " + eventName + " " + ai);
    if (ai) {
        ai.trackEvent(eventName);        
    }       
}
