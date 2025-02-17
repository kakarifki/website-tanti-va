import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl p-4">
        {/* Left side text */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">Let's make your business shine</h1>
          <p className="text-lg text-gray-600">
            A Virtual Assistant can help you manage your daily tasks efficiently,
            so you can focus on growing your business.
          </p>
        </div>

        {/* Right side image */}
        <div className="flex justify-center items-center">
          <Image
            src="https://ucarecdn.com/cf3fad11-5a19-4e42-a62f-0b576696add5/Profil.png" 
            alt="Virtual Assistant"
            width={400}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </main>
  )
}
