import React, { useState, useEffect } from 'react';
import { Calendar, Mail, BarChart2, Settings, AlertCircle } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";

const Dashboard = () => {
  const [file, setFile] = useState(null);
  const [emailTemplate, setEmailTemplate] = useState('');
  const [scheduleDate, setScheduleDate] = useState('');
  const [sendingStatus, setSendingStatus] = useState('idle');
  const [analytics, setAnalytics] = useState({
    sent: 0,
    opened: 0,
    clicked: 0,
    failed: 0
  });
  const [settings, setSettings] = useState({
    emailsPerHour: 100,
    retryAttempts: 3,
    provider: 'smtp'
  });

  // Mock data for demonstration
  const emailQueue = [
    { id: 1, recipient: 'user1@example.com', status: 'pending', scheduledFor: '2024-11-18 10:00' },
    { id: 2, recipient: 'user2@example.com', status: 'sent', scheduledFor: '2024-11-18 11:00' },
  ];

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  const handleSchedule = () => {
    setSendingStatus('scheduled');
    // Implementation for scheduling would go here
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Email Campaign Dashboard</h1>
      
      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Analytics Cards */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart2 className="w-5 h-5" />
              Campaign Analytics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold">{analytics.sent}</p>
                <p className="text-gray-600">Emails Sent</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">{analytics.opened}</p>
                <p className="text-gray-600">Opened</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">{analytics.clicked}</p>
                <p className="text-gray-600">Clicked</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">{analytics.failed}</p>
                <p className="text-gray-600">Failed</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Settings Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Campaign Settings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Emails per Hour</label>
                <input
                  type="number"
                  className="w-full p-2 border rounded"
                  value={settings.emailsPerHour}
                  onChange={(e) => setSettings({...settings, emailsPerHour: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Retry Attempts</label>
                <input
                  type="number"
                  className="w-full p-2 border rounded"
                  value={settings.retryAttempts}
                  onChange={(e) => setSettings({...settings, retryAttempts: e.target.value})}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Email Configuration Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Email Configuration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Recipient List</label>
                <input
                  type="file"
                  className="w-full p-2 border rounded"
                  onChange={handleFileUpload}
                  accept=".csv,.xlsx"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email Template</label>
                <textarea
                  className="w-full p-2 border rounded h-32"
                  value={emailTemplate}
                  onChange={(e) => setEmailTemplate(e.target.value)}
                  placeholder="Enter your email template..."
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Scheduling Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Schedule Campaign
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Schedule Date & Time</label>
                <input
                  type="datetime-local"
                  className="w-full p-2 border rounded"
                  value={scheduleDate}
                  onChange={(e) => setScheduleDate(e.target.value)}
                />
              </div>
              <button
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                onClick={handleSchedule}
              >
                Schedule Campaign
              </button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Queue Status */}
      <Card>
        <CardHeader>
          <CardTitle>Email Queue Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left p-2">Recipient</th>
                  <th className="text-left p-2">Status</th>
                  <th className="text-left p-2">Scheduled For</th>
                </tr>
              </thead>
              <tbody>
                {emailQueue.map((email) => (
                  <tr key={email.id}>
                    <td className="p-2">{email.recipient}</td>
                    <td className="p-2">
                      <span className={`px-2 py-1 rounded ${
                        email.status === 'sent' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {email.status}
                      </span>
                    </td>
                    <td className="p-2">{email.scheduledFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Status Alert */}
      {sendingStatus === 'scheduled' && (
        <Alert className="mt-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Campaign Scheduled</AlertTitle>
          <AlertDescription>
            Your email campaign has been scheduled successfully.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default Dashboard;
