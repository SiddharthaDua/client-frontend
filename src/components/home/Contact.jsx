// import { useState, useEffect, useRef } from "react";
// import { FaTimes, FaUser, FaPhoneAlt } from "react-icons/fa";
// import { submitContactForm } from "../../utils/api";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Contact = ({ onPopupChange }) => {
//     const [open, setOpen] = useState(false);
//     const [name, setName] = useState("");
//     const [phone, setPhone] = useState("");
//     const [error, setError] = useState("");
//     const [loading, setLoading] = useState(false);
//     const [isSubmitted, setIsSubmitted] = useState(false);

//     const timerRef = useRef(null);

//     // Check if already submitted & Listen for form events
//     useEffect(() => {
//         const checkSubmission = () => {
//             const submitted = localStorage.getItem("formSubmitted");
//             if (submitted) {
//                 setIsSubmitted(true);
//                 setOpen(false); // Agar popup khula hai to band kar do
//                 if (onPopupChange) onPopupChange(false);
//                 if (timerRef.current) clearTimeout(timerRef.current);
//             }
//         };

//         checkSubmission();

//         // Listen for the custom event from the other form
//         window.addEventListener("formSubmittedSuccessfully", checkSubmission);

//         return () => window.removeEventListener("formSubmittedSuccessfully", checkSubmission);
//     }, [onPopupChange]);

//     /* =========================
//         INITIAL OPEN AFTER 40 SEC
//     ========================= */
//     useEffect(() => {
//         if (isSubmitted || localStorage.getItem("formSubmitted")) return;

//         timerRef.current = setTimeout(() => {
//             setOpen(true);
//             if (onPopupChange) onPopupChange(true);
//         }, 30000);

//         return () => {
//             if (timerRef.current) clearTimeout(timerRef.current);
//         };
//     }, [onPopupChange, isSubmitted]);

//     /* =========================
//         CLOSE LOGIC
//     ========================= */
//     const handleClose = () => {
//         setOpen(false);
//         if (onPopupChange) onPopupChange(false);

//         if (timerRef.current) clearTimeout(timerRef.current);

//         if (!isSubmitted && !localStorage.getItem("formSubmitted")) {
//             timerRef.current = setTimeout(() => {
//                 setOpen(true);
//                 if (onPopupChange) onPopupChange(true);
//             }, 40000);
//         }
//     };

//     const handleNameChange = (e) => setName(e.target.value);
//     const handlePhoneChange = (e) => {
//         const value = e.target.value.replace(/\D/g, "");
//         if (value.length <= 10) setPhone(value);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (name.trim().length < 3) { setError("Name must be at least 3 characters"); return; }
//         if (phone.length !== 10) { setError("Phone number must be exactly 10 digits"); return; }

//         setError("");
//         setLoading(true);

//         try {
//             const result = await submitContactForm({ name: name.trim(), number: phone });
//             if (result.success) {
//                 toast.success("We'll contact you soon 🚀", { position: "top-center", theme: "colored" });
//                 localStorage.setItem("formSubmitted", "true");
//                 setIsSubmitted(true);
//                 setOpen(false);
//                 if (onPopupChange) onPopupChange(false);
//                 if (timerRef.current) clearTimeout(timerRef.current);
//             }
//         } catch (err) {
//             toast.error(err || "Submission failed!", { theme: "colored" });
//             setError(err);
//         } finally {
//             setLoading(false);
//         }
//     };

//     if (!open) return null;

//     return (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
//             <div className="relative w-full max-w-sm sm:max-w-md bg-white rounded-2xl shadow-2xl p-6 sm:p-8 animate-[fadeIn_0.4s_ease-out]">
//                 <button onClick={handleClose} className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition transform hover:rotate-90 cursor-pointer">
//                     <FaTimes size={18} />
//                 </button>
//                 <div className="text-center mb-6">
//                     <h2 className="text-2xl font-bold text-gray-900">Login</h2>
//                     <p className="text-sm text-gray-500 mt-1">Enter your details to continue</p>
//                 </div>
//                 <form onSubmit={handleSubmit} className="space-y-5">
//                     <div className="relative">
//                         <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-sky-400" />
//                         <input type="text" placeholder="Full Name" value={name} onChange={handleNameChange} disabled={loading} className="w-full pl-11 pr-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-sky-400 transition" />
//                     </div>
//                     <div className="relative">
//                         <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-sky-400" />
//                         <input type="tel" placeholder="Phone Number" value={phone} onChange={handlePhoneChange} disabled={loading} className="w-full pl-11 pr-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-sky-400 transition" />
//                     </div>
//                     {error && <p className="text-sm text-red-500 text-center">{error}</p>}
//                     <button type="submit" disabled={name.trim().length < 3 || phone.length !== 10 || loading} className="w-full bg-sky-500 text-white py-3 rounded-lg font-semibold transition transform shadow-lg hover:bg-sky-600 disabled:opacity-50 flex justify-center items-center">
//                         {loading ? <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : "Submit"}
//                     </button>
//                 </form>
//                 <p className="text-xs text-center text-gray-400 mt-6">We respect your privacy. Your details are safe with us.</p>
//             </div>
//             <style>{`@keyframes fadeIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }`}</style>
//         </div>
//     );
// };

// export default Contact;