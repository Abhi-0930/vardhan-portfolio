import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 6302771540',
      color: 'bg-gray-900'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'srivardhan.kondu@gmail.com',
      color: 'bg-gray-800'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, India',
      color: 'bg-gray-700'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/kondu-srivardhan-7001a1252/',
      color: 'bg-gray-900'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:srivardhan.kondu@gmail.com',
      color: 'bg-gray-800'
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-black">
            Contact Me
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Let's connect! I'm always open to discussing new opportunities, collaborations, and interesting projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Left Column - Contact Information */}
          <div>
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4"
                  >
                    <div className={`p-3 ${info.color} rounded-xl`}>
                      <info.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-medium">{info.label}</p>
                      <p className="text-gray-900 font-semibold">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Social Links */}
          <div>
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect With Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`p-4 ${social.color} rounded-xl text-white hover:shadow-lg transition-all duration-300`}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 