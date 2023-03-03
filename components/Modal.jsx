import ReactDOM from 'react-dom';
import { useEffect, useRef, useState } from 'react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';

// components
import Login from './signup-login/Login';
import Signup from './signup-login/Signup';

// styles
import { ModalOverlay, ModalContainer } from '../styles/styled_components/modal';

const Modal = ({ isOpen, onClose, showSignup, setShowSignup }) => {
	const modalRef = useRef(null);
	const supabase = useSupabaseClient();
	const session = useSession();

	function timeOut(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	useEffect(() => {
		const handleClose = (e) => {
			if (modalRef.current && !modalRef.current.contains(e.target)) {
				onClose();
			}
		};
		document.addEventListener('click', handleClose, true);
		return () => {
			document.removeEventListener('click', handleClose, true);
		};
	}, [onClose]);

	if (!isOpen) return null;

	return ReactDOM.createPortal(
		<ModalOverlay>
			<ModalContainer ref={modalRef}>
				{showSignup ? (
					<Signup
						setShowSignup={setShowSignup}
						supabase={supabase}
						session={session}
						timeOut={timeOut}
						onClose={onClose}
					/>
				) : (
					<Login
						setShowSignup={setShowSignup}
						supabase={supabase}
						session={session}
						timeOut={timeOut}
						onClose={onClose}
					/>
				)}
			</ModalContainer>
		</ModalOverlay>,
		document.body
	);
};

export default Modal;
