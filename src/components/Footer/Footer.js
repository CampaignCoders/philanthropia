import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <p>
                    {this.props.beneficiary}<br />
                    {this.props.organization}<br />
                    <span className="text-muted">Philanthropa &#169; {new Date().getFullYear()}</span>
                </p>

            </footer>
        );
    }
}

export default Footer;

/*                <div className="footer">
                    <span className="text-muted">Philanthropa &#169; {new Date().getFullYear()}</span>
                </div>
*/
