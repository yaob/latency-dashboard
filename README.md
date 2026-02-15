# Request Latency Dashboard

A real-time web-based dashboard for monitoring HTTP request latency.

## Features

- Real-time latency monitoring with automatic updates
- Visual charts showing latency trends over time
- Statistics display (average, min, max latency)
- Request log with timestamps and status
- Start/stop monitoring controls
- Data persistence (resets on browser refresh)

## Usage

1. Open `index.html` in a web browser
2. Click "Start Monitoring" to begin tracking request latency
3. Monitor the real-time charts and statistics
4. Use "Stop Monitoring" to pause tracking
5. Click "Clear Data" to reset all metrics

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Chart.js (via CDN)

## How It Works

The dashboard simulates HTTP requests to measure latency. Each request captures the time difference between:
- Start of the request
- End of the request (after a simulated delay)

Latency is calculated in milliseconds and displayed in the charts and statistics.

## Customization

- Adjust the `setInterval` delay in `startMonitoring()` to change request frequency
- Modify the random delay in `makeRequest()` to simulate different API response times
- Customize the chart styling in the Chart.js configuration

## License

MIT