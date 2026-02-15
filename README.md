# Request Latency Monitor

Real-time web-based dashboard for monitoring HTTP request latency.

## 🎯 What's New

This dashboard now **measures REAL request latency** by making actual HTTP requests to the URL you specify! It's designed to monitor your requests' performance in real-time.

## ✨ Features

- 🚀 **Real HTTP request monitoring** - Measures actual latency to any URL
- 📊 **Live charts** - Visual representation of latency trends over time
- 📈 **Statistics** - Average, minimum, and maximum latency metrics
- 📝 **Request log** - Detailed logs with timestamps and HTTP status codes
- ⏱️ **Automated monitoring** - Start/stop monitoring with one click
- 🎨 **Responsive design** - Works on desktop and mobile

## 🎬 Quick Start

### Option 1: Open Local HTML File
```bash
cd ~/latency-dashboard
open index.html
```

### Option 2: Deploy to Netlify (Free)
1. Push your repo to GitHub (✅ already done!)
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag and drop the `latency-dashboard` folder
4. Click "Deploy Site"

### Option 3: Deploy to Vercel (Free)
```bash
npm install -g vercel
cd ~/latency-dashboard
vercel
```

## 🚀 How It Works

1. **Enter a URL** - Input the API endpoint you want to monitor
   - Default: `https://api.github.com`
   - Try: `https://jsonplaceholder.typicode.com`, `https://api.weather.gov`, etc.

2. **Click "Start Monitoring"** - The dashboard will make requests every second

3. **Watch real-time metrics** - See latency statistics and charts update instantly

## 📊 What You'll See

- **Average Latency** - Mean response time (last 60 requests)
- **Min Latency** - Fastest request
- **Max Latency** - Slowest request
- **Live Chart** - Latency trends over time
- **Request Log** - Detailed history with timestamps

## 🎯 Use Cases

- **API Performance Testing** - Monitor your API's response times
- **Website Latency** - Track how fast websites load
- **Network Monitoring** - Observe internet connection stability
- **Load Testing** - Simulate requests and measure performance
- **Learning** - Understand how network latency affects your requests

## 🔧 Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Visualization**: Chart.js (via CDN)
- **Real Requests**: Fetch API (native browser)

## 🌐 Sample URLs to Monitor

### Public APIs
- `https://api.github.com` - GitHub API
- `https://jsonplaceholder.typicode.com/posts` - JSON Placeholder API
- `https://api.weather.gov/points/37.7749,-122.4194` - NOAA Weather API
- `https://api.ipify.org?format=json` - IP detection service

### Websites
- `https://www.google.com`
- `https://www.github.com`
- `https://www.yahoo.com`
- `https://www.wikipedia.org`

## 📝 Status Codes Explained

- **✓ Fast** (< 200ms) - Excellent performance
- **⚠ Moderate** (200ms - 1000ms) - Acceptable performance
- **✗ Slow** (> 1000ms) - Needs optimization

## 🛠️ Customization

### Change Monitoring Interval
Edit the `setInterval` call in `startMonitoring()`:
```javascript
monitoringInterval = setInterval(makeRequest, 500); // Every 500ms
```

### Modify Request Parameters
Add headers, timeout, or custom options:
```javascript
const response = await fetch(currentUrl, {
  method: 'GET',
  headers: { 'Authorization': 'Bearer YOUR_TOKEN' },
  signal: AbortSignal.timeout(5000) // 5s timeout
});
```

## 📄 License

MIT

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📞 Support

Have questions? Check out the logs or open an issue on GitHub!

---

**Happy monitoring! 📊📈**