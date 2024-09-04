type TEmptyProps = {
  children: React.ReactNode;
};
function EmptyTemplate({ children }: TEmptyProps) {
  return <div className='ticketsEmpty'>{children}</div>;
}

export default EmptyTemplate;
