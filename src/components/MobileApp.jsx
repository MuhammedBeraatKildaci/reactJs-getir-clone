function MobileApp() {
	return (
		<>
			<div className="bg-purple-700 pt-6 flex items-center pl-12 justify-between bg-mobile-app rounded-lg">
				<div className="text-white">
					<h3 className="text-3xl	tracking-tighter font-bold">Getir'i indirin!</h3>
					<p className="font-semibold mt-3">İstediğiniz ürünleri dakikalar içinde kapınıza <br/> getirelim.
					</p>
					<div className="flex gap-x-2 mt-8">
						<a href="#">
							<img
								src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"/>
						</a>
						<a href="#">
							<img
								src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"/>
						</a>
						<a href="#">
							<img
								src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"/>
						</a>
					</div>
				</div>
				<div className="self-end">
					<img src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png"/>
				</div>
			</div>
		</>
	)
}
export default MobileApp