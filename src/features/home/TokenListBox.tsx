import { RiSearchLine } from 'react-icons/ri';

const TokenListBox = () => {
  return (
    <section className="space-y-4">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="جستجوی ارز ..."
          className="w-full pr-12 placeholder:text-zinc-500 outline-none h-[50px] rounded-2xl bg-transparent border border-zinc-700"
        />
        <RiSearchLine size={28} className='absolute text-emerald-700 top-3 right-2 rotate-90'/>
      </div>
      <hr className='border-zinc-700'/>
      {/* tokens list */}
    </section>
  );
}

export default TokenListBox
