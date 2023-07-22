/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { FaLock, FaLockOpen } from 'react-icons/fa';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import { get } from 'lodash';
import axios from 'axios';

import 'react-toastify/dist/ReactToastify.css';

import { Container } from './styled';
import Link from 'next/link';

import Loading from '../loading';

interface Body {
  emailOrUserName: string;
  password: string;
  rememberPassword: boolean;
}

export default function FormLogin() {
  const [typePassword, setTypePassword] = useState('password');
  const [loading, setLoading] = useState(false);

  const redirect = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Body>();

  const onSubmit: SubmitHandler<Body> = async body => {
    if (loading) return;

    try {
      setLoading(true);
      await axios.post(`${process.env.NEXT_PUBLIC_URL_API}/login`, body);
      redirect.push('/user/dasboard');
    } catch (err: any) {
      toast.error(
        get(err.response, 'err.response.data.message', false)
          ? err.response.data.message
          : 'internal server error 500',
        {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <h1>Sign In Your Account</h1>
      <p>Please Insert your login credentials to access your data.</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container-input">
          <input
            type="text"
            placeholder="Email or Username"
            required={true}
            {...register('emailOrUserName')}
          />

          {errors.emailOrUserName && (
            <span>{errors.emailOrUserName.message}</span>
          )}
        </div>
        <div className="container-input">
          <input
            type={typePassword}
            placeholder="Password"
            required={true}
            {...register('password')}
          />
          {typePassword === 'password' ? (
            <FaLock onClick={() => setTypePassword('text')} />
          ) : (
            <FaLockOpen onClick={() => setTypePassword('password')} />
          )}
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <div className="acept-terms">
          <div>
            <input
              type="checkbox"
              defaultChecked={false}
              {...register('rememberPassword')}
            />
            <span>Remember me</span>
          </div>
          <Link href="/password/reset">Forgot Password?</Link>
        </div>
        <button
          type="submit"
          style={{ pointerEvents: loading ? 'none' : 'all' }}
        >
          Sign In {loading && <Loading />}
        </button>
        <span>
          {`Don't`} have an account yet?
          <Link href="/register">Create Account</Link>
        </span>
      </form>
    </Container>
  );
}
