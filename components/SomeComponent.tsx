import styles from './SomeComponent.css';

const SomeComponent: React.FC = () => {
  return <div className="{= styles.container}">Some Component</div>;
};

export default SomeComponent;
