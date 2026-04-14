export function trackPageView(path: string) {
  if (process.env.NODE_ENV === "development") {
    console.debug("[analytics] page_view", path);
  }
}

export function trackEvent(name: string, payload?: Record<string, unknown>) {
  if (process.env.NODE_ENV === "development") {
    console.debug("[analytics] event", name, payload);
  }
}

