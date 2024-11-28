import React from 'react';
import './Footer.css';
function Footer() {
    return (
        <footer className="footer">
            <p>&copy; 2024 My Website. All Rights Reserved.</p>
                <nav>
                    <ul>
                        <li><a href="#privacy">Privacy Policy</a></li>
                        <li><a href="#terms">Terms of Service</a></li>
                    </ul>
                </nav>
        </footer>
    );
}

export default Footer