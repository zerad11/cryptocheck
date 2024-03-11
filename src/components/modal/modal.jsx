<<<<<<< HEAD
import React from 'react';
import "./modal.css"

const Modal = ({active, setActive, children}) => {
    return (
        <div>
            <button className='modal__Button' onClick={() => setActive(true)}>
                <h2>API</h2>
            </button>
            <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
                <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                    <button className='modalESC' onClick={(e) => { setActive(false); e.stopPropagation(); }}>X</button>
                    {children}
                </div>
=======
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
>>>>>>> c93ddffa83646d7cdf8df2bc93ac5609f039f85f
            </div>
        </div>
    );
}
<<<<<<< HEAD

export default Modal;
=======
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
>>>>>>> c93ddffa83646d7cdf8df2bc93ac5609f039f85f
