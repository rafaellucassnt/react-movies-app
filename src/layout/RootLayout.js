import { Outlet } from 'react-router-dom';
import styles from './RootLayout.module.css';

export function RootLayout() {
	return (
		<>
			<header className={styles.header}>
				<h1><span className={styles.first}>🍿Porpcorn</span><span className={styles.second}>Time</span></h1>
				<h3>O Melhor em Filmes e Séries, Apenas um Toque de Distância! 🎥📺</h3>
			</header>

			<Outlet />

			<footer className={styles.footer}>
				Copyright 2023. Todos os direitos reservados. | 🍿PorpcornTime
			</footer>
		</>
	);
}
