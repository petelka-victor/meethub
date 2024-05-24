import SignInForm from '@/components/sign-in-form.component';
import SignUpForm from '@/components/sign-up-form.component';
import Image from 'next/image';
import Link from 'next/link';

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-96 ">
        <div className="mb-8">
          <Image className="mx-auto" src="/logo.svg" width={42} height={42} alt="logo" />
        </div>
        <SignUpForm />
        <div className="mt-4 text-center">
          <Link href="/sign-in" className="text-white underline">
            Already have an account? Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
