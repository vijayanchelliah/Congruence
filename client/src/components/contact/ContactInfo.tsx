interface ContactInfoProps {
  address: string;
  phone: string;
  email: string;
  hours: string;
  socialLinks: {
    facebook: string;
    twitter: string;
    linkedin: string;
    instagram: string;
  };
}

const ContactInfo = ({ address, phone, email, hours, socialLinks }: ContactInfoProps) => {
  return (
    <>
      <div className="bg-primary rounded-lg shadow-lg p-8 text-white mb-8">
        <h3 className="font-heading font-bold text-2xl mb-6">Contact Information</h3>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="text-secondary text-xl mr-4">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-1">Address</h4>
              <p className="text-white/80">
                Congruence Infrastructure Private Limited,<br/>
                170, Indra Nagar,<br/>
                3rd Street, B.B.Kulam,<br/>
                Madurai - 625002<br/>
                Tamil Nadu, India.
              </p>
            </div>
          </div>
          
{phone && phone.trim() && (
          <div className="flex items-start">
            <div className="text-secondary text-xl mr-4">
              <i className="fas fa-phone"></i>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-1">Phone</h4>
              <p className="text-white/80">{phone}</p>
            </div>
          </div>
          )}
          
          <div className="flex items-start">
            <div className="text-secondary text-xl mr-4">
              <i className="fas fa-envelope"></i>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-1">Email</h4>
              <p className="text-white/80">{email}</p>
            </div>
          </div>
          
{hours && hours.trim() && (
          <div className="flex items-start">
            <div className="text-secondary text-xl mr-4">
              <i className="fas fa-clock"></i>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-1">Hours</h4>
              <p className="text-white/80">{hours.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  {index < hours.split('\n').length - 1 && <br/>}
                </span>
              ))}</p>
            </div>
          </div>
          )}
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h3 className="font-heading font-bold text-2xl text-primary mb-6">Follow Us</h3>
        <div className="flex space-x-4">
          <a href={socialLinks.twitter} className="bg-light hover:bg-secondary hover:text-white text-primary w-10 h-10 rounded-full flex items-center justify-center transition-colors" aria-label="X">
            <span className="font-bold text-sm">X</span>
          </a>
          <a href={socialLinks.linkedin} className="bg-light hover:bg-secondary hover:text-white text-primary w-10 h-10 rounded-full flex items-center justify-center transition-colors" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href={socialLinks.instagram} className="bg-light hover:bg-secondary hover:text-white text-primary w-10 h-10 rounded-full flex items-center justify-center transition-colors" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
