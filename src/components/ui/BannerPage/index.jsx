import Link from "next/link";
import css from "./styles/styles.module.scss";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Skeleton from "../Skeleton";

const BannerPage = ({ idioma, title }) => {
	const router = useRouter();

	const crumbs = router.asPath.split("/").filter((item) => item !== "");

	return (
		<header className={css.bannerPage}>
			<div className={css.imageContainer}>
				<Skeleton
					style={{
						position: "absolute",
						width: "100%",
						height: "100%",
					}}
				/>
				<Image
					className={css.image}
					src={"/assets/images/banners/1.jpg"}
					alt='Banner Background Image'
					fill
					draggable={false}
				/>
				<img
					className={css.left_header}
					src={"/assets/images/header_left_bg.png"}
					alt='Banner Background Image'
					draggable={false}
				/>
			</div>
			<div className='wrapper'>
				<div className={css.content}>
					<h1 className={css.title}>{title}</h1>
					<div className={css.crumbs}>
						<Link className={css.link_home} href='/'>
							Inicio
						</Link>
						{crumbs.map((crumb, index) => {
							return (
								<React.Fragment key={index}>
									<span className={css.separator}>/</span>
									{index === crumbs.length - 1 ? (
										<span>{crumb}</span>
									) : (
										<Link href={`/${crumb}`}>{crumb}</Link>
									)}
								</React.Fragment>
							);
						})}
					</div>
				</div>
			</div>
		</header>
	);
};

export default BannerPage;
