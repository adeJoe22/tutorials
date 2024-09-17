import MeshGradientBackground from "../components/MeshGradient";

function Hero() {
  return (
    <div className='relative h-screen flex items-center justify-center'>
      {/* Animated Mesh Gradient Background */}
      <MeshGradientBackground />

      {/* Caption Content */}
      <div className='absolute z-10 text-center text-black max-w-3xl px-6 md:px-8 lg:px-12'>
        <h1 className='text-3xl leading-[30px] sm:text-4xl md:text-5xl lg:text-6xl font-bold'>
          Ready to switch careers and break into tech?
        </h1>
        <p className='mt-4 leading-5 text-base sm:text-lg md:text-xl lg:text-2xl font-light'>
          Join our hands-on Full Stack Software Development training
          program designed specifically for career changers. Gain the
          skills, confidence, and support you need to thrive in the
          digital world!
        </p>
        <button className='mt-8 px-5 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-[#797bec] text-white font-medium rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 ease-in-out'>
          Get Started Today
        </button>
      </div>
    </div>
  );
}

export default Hero;
