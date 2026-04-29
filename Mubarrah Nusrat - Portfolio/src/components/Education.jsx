import React from 'react';

const Education = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#F5EBE0]/20">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between items-baseline mb-24">
          <h2 className="text-5xl md:text-7xl">
            Academic <br /> <span className="serif-italic text-primary lowercase">Foundation.</span>
          </h2>
          <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 font-bold">03 / ACADEMIC</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="glass-card p-12 rounded-[2rem] border-none shadow-sm hover:shadow-md transition-shadow">
            <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em] block mb-6">2022 - 2026</span>
            <h3 className="text-4xl mb-4 lowercase serif-italic">Bachelor in Computer Science</h3>
            <p className="text-zinc-400 uppercase tracking-widest text-[10px] font-black mb-8">University of Science & Technology</p>
            <div className="h-1 w-20 bg-accent rounded-full"></div>
          </div>
          <div className="glass-card p-12 rounded-[2rem] border-none shadow-sm hover:shadow-md transition-shadow">
            <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em] block mb-6">2019 - 2021</span>
            <h3 className="text-4xl mb-4 lowercase serif-italic">Medical Science Pre-Req</h3>
            <p className="text-zinc-400 uppercase tracking-widest text-[10px] font-black mb-8">Punjab Group of Colleges</p>
            <div className="h-1 w-20 bg-accent rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
