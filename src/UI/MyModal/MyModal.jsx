import cl from "./MyModal.module.css";
export default function MyModal({ children, visiable, setVisiable }) {
  const rootClasses = [cl.myModal];
  if (visiable) {
    rootClasses.push(cl.active);
  }
  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisiable(false)}>
      <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
