import React from 'react';

export default function Footer() {
  return (
    <div className="container">
      <footer className="py-0">     

        <div className="d-flex justify-content-center py-4 my-4 border-top">
          <p className="text-muted">&copy; 2021 MYAG SYSTEMS Software • Direitos Reservados. Inc. Desenvolvido por Myag Systems.</p>    
          <ul className="list-unstyled d-flex">
            <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use href="#twitter" /></svg></a></li>
            <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use href="#instagram" /></svg></a></li>
            <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use href="#facebook" /></svg></a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}