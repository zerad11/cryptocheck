import React, { useState } from 'react';
import "./modal.css"
const Paragraph = ({ text }) => {
    return <p className="modalParagraph">{text}</p>;
  };
  
  // Input.jsx
  const Input = () => {
    return <input type="text" className="modalInput" />;
  };
const Modal = ({active, setActive, children}) =>{
    return (
        <div className={active ? "modal active":"modal"} onClick={()=>setActive(false)}>
            <div className={active ? "modal__content active":"modal__content"} onClick={e =>e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}
export default Modal;




// const UpdateAPIsComponent = ({ onClose }) => {
//     const [formData, setFormData] = useState({
//         bybit: '',
//         okx: '',
//         // Добавьте остальные поля здесь
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const handleSubmit = async () => {
//         try {
//             await axios.post('http://localhost:5000/updateAPIs', formData);
//             alert('POST запрос отправлен успешно');
//             onClose();
//         } catch (error) {
//             alert('Ошибка при отправке POST запроса');
//         }
//     };

//     return (
//         <div className="overlay">
//             <div className="modal">
//                 <input type="text" name="bybit" value={formData.bybit} onChange={handleChange} />
//                 <input type="text" name="okx" value={formData.okx} onChange={handleChange} />
//                 {/* Добавьте остальные input поля здесь */}
//                 <button onClick={handleSubmit}>Отправить POST запрос</button>
//             </div>
//         </div>
//     );
// };

// export default UpdateAPIsComponent;
