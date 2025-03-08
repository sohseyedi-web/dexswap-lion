import TokensTable from '@/features/tokenList/TokenTable'
import TokenTableHeader from '@/features/tokenList/TokenTableHeader'

const Tokens = () => {
  return (
    <section className="max-w-7xl mx-auto lg:px-0 px-6 pb-6">
      <TokenTableHeader />
      <TokensTable />
    </section>
  );
}

export default Tokens
