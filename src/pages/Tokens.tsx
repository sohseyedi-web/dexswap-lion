import TokensTable from '@/features/tokenList/TokenTable'
import TokenTableHeader from '@/features/tokenList/TokenTableHeader'
import { motion } from 'framer-motion'

const Tokens = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto lg:px-0 px-6 pb-6"
    >
      <TokenTableHeader />
      <TokensTable />
    </motion.section>
  );
}

export default Tokens
