import LoginForm from "@/components/forms/LoginForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div 
      className="flex h-screen bg-cover bg-center relative"
      style={{ 
        backgroundImage: "url('/11.jpg')",
        backgroundSize: 'cover', 
        backgroundPosition: 'center'
      }}
    >
      <section className="flex-grow flex items-center justify-center relative z-10">
        <div 
          className="w-full max-w-lg p-10 rounded-xl"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)' // Black with 60% opacity
          }}
        >
          <div className="mb-2 flex justify-center">
            <span className="inline-block w-full max-w-[60px]">
              {/* Uncomment and use your logo here */}
              {/* <Image
                src="logo."
                height={100}
                width={100}
                alt="Indian Flag"
                className="h-10 w-auto"
              /> */}
            </span>
          </div>
        
          <h3 className="mt-2 text-center text-base text-gray-300">
            Don&apos;t have an account?&nbsp;
            <Link
              href="/registered"
              className="font-bold text-lg text-primary transition-all duration-200 hover:text-green-500"
            >
              Register
            </Link>
          </h3>
          {/* Handle error messages if any */}
          {/* {error && <p className="text-red-600 mt-8 text-center">{error}</p>} */}
          <LoginForm />
        </div>
      </section>

      <footer className="absolute bottom-0 w-full text-center py-4 bg-opacity-50 text-white">
        <p className="text-sm">
          © 2024 UrbanNet
        </p>
      </footer>
    </div>
  );
}
