# Email Campaign Manager

A robust email campaign management system built with React and Node.js that allows users to schedule, track, and analyze email campaigns.

## Features

- Email campaign scheduling with customizable throttling
- Analytics dashboard with real-time tracking
- CSV/Excel file upload for recipient lists
- Email template editor
- Queue management system
- Error handling and retry mechanism
- Rate limiting compliance with ESP guidelines

## Technical Stack

- Frontend: React.js with Tailwind CSS
- Backend: Node.js with Express
- Database: PostgreSQL (for storing campaign data and analytics)
- Email Service Provider: SMTP/SendGrid/Amazon SES (configurable)

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/yourusername/email-campaign-manager.git
cd email-campaign-manager
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
Create a `.env` file in the root directory with the following variables:
```
DATABASE_URL=your_database_url
ESP_API_KEY=your_esp_api_key
EMAIL_RATE_LIMIT=100
MAX_RETRY_ATTEMPTS=3
```

4. Set up the database:
```bash
npm run db:migrate
```

5. Start the development server:
```bash
npm run dev
```

## ESP Configuration

### SendGrid Setup
1. Create a SendGrid account
2. Generate an API key from the SendGrid dashboard
3. Add the API key to your `.env` file
4. Configure sender verification

### Amazon SES Setup
1. Create an AWS account
2. Set up Amazon SES in your preferred region
3. Create SMTP credentials
4. Add credentials to your `.env` file

## Email Scheduling Configuration

The application uses a job queue system for scheduling emails. Configure the following parameters in the dashboard:

- Emails per hour (default: 100)
- Retry attempts for failed emails (default: 3)
- Minimum interval between emails
- Maximum batch size

## Usage Instructions

1. **Upload Recipients**: 
   - Click "Upload Data" to import your CSV/Excel file
   - Required columns: email, name (optional), custom_fields (optional)

2. **Create Campaign**:
   - Enter email subject and content
   - Use template variables: {{name}}, {{email}}, {{custom_field}}
   - Schedule campaign date and time

3. **Monitor Campaign**:
   - Track delivery status
   - View open and click rates
   - Monitor bounce and failure rates
   - Export analytics reports

## Error Handling

The system includes comprehensive error handling:
- ESP rate limit compliance
- Invalid email addresses
- Network failures
- ESP service disruptions

## Security Considerations

- All API keys and credentials are stored securely
- Rate limiting on API endpoints
- Input validation and sanitization
- XSS protection
- CSRF protection

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License - See LICENSE file for details

## Support

For support or feature requests, please open an issue in the GitHub repository.
