# Global Port Terminals Website

A modern, responsive website for a global port terminal company, featuring a professional design and comprehensive functionality.

## Features

- Responsive design that works on all devices
- Modern navigation with dropdown menus
- Staff portal with secure login
- Public Code of Conduct section
- Interactive global map
- News and updates section
- Multi-language support
- Mobile-first approach

## Project Structure

```
├── index.html              # Homepage
├── about.html             # About page
├── staff-portal.html      # Staff portal with login
├── code-of-conduct.html   # Public Code of Conduct
├── css/
│   └── style.css         # Main stylesheet
├── js/
│   └── main.js           # Main JavaScript file
├── images/               # Image assets
├── videos/              # Video assets
└── documents/           # PDF documents
```

## Setup Instructions

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Set up a local development server. You can use any of these methods:

   - Using Python:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```

   - Using Node.js:
   ```bash
   # Install http-server globally
   npm install -g http-server
   
   # Run the server
   http-server
   ```

3. Open your browser and navigate to:
   - `http://localhost:8000` (Python)
   - `http://localhost:8080` (Node.js http-server)

## Development

### Prerequisites

- Modern web browser
- Text editor or IDE
- Basic knowledge of HTML, CSS, and JavaScript

### Customization

1. Update the content in HTML files
2. Modify styles in `css/style.css`
3. Add custom functionality in `js/main.js`
4. Replace images in the `images/` directory
5. Update PDF documents in the `documents/` directory

### Adding New Pages

1. Create a new HTML file
2. Include the common elements (top bar, navigation, footer)
3. Add page-specific styles in the `<style>` section
4. Link to the main CSS and JavaScript files

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Performance Optimization

- Images are optimized for web
- CSS and JavaScript are minified
- Lazy loading for images and videos
- Responsive images using srcset
- Efficient CSS using CSS Grid and Flexbox

## Security Considerations

- Staff portal uses secure authentication
- PDF documents are protected from direct access
- Form submissions are validated
- XSS protection implemented
- CSRF protection for forms

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or support, please contact:
- Email: info@emmyfrankterminal.com
- Phone: +234 (0) 802-5758-575

## Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Inspiration from APM Terminals and Emmy Frank Terminals 
