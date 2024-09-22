import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div
      className="flex flex-center min-h-screen w-full bg-purple-100"
    >
      <SignIn />
    </div>
  )
}

export default SignInPage;
