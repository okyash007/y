"use client";
import "@blocknote/mantine/style.css";
import "@blocknote/core/fonts/inter.css";
import styles from './BlockRender.module.css';

interface BlockRenderProps {
  html: string;
}

const BlockRender = ({ html }: BlockRenderProps) => {
  return (
    <div 
      className={styles.blockNoteContainer}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default BlockRender;
