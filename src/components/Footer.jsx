import React from "react";
import logo from '../assets/logo.svg'; 

const Footer = () => {
  const sections = [
    {
      title: "Recursos",
      items: ["Blog", "Documentación", "Términos y condiciones"],
    },
    {
      title: "Compañía",
      items: ["Sobre nosotros", "Inversores"],
    },
    {
      title: "Soporte",
      items: ["Centro de ayuda", "Contacto", "Guías", "Estado del sistema"],
    },
    {
      title: "Comunidad",
      items: ["Foros", "Eventos"],
    },
  ];

  return (
    <div className="mx-auto py-10 text-white bg-[#253237]">
      <div className="max-w-[1240px] px-4 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="flex items-center mb-6 lg:mb-0 lg:col-span-1">
          <img src={logo} alt="Logo" className="h-12 w-12 rounded-full object-cover bg-[#253237] p-2 mr-3" />
          <h1 className="text-3xl font-bold">The House</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:col-span-2">
          {sections.map((section, i) => (
            <div key={i}>
              <h6 className="font-medium text-lg mb-2">{section.title}</h6>
              <ul>
                {section.items.map((item, j) => (
                  <li key={j} className="py-0.5 text-sm hover:text-[#9DB4C0]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
