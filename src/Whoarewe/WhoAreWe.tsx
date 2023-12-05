import { Grid, Text, Image, UnstyledButton, Paper } from "@mantine/core";
import React from "react";
import WHO from "../Assets/who.png";
import RectangleOmega from "../Assets/RectangleOmega.png";
import RectangleOmegaMob from "../Assets/RectangleOmegaMob.png";

type Props = {};

const WhoAreWe = (props: Props) => {
	return (
		<>
			<Paper
				maw={{ lg: 1440, base: 360, sm: 1024 }}
				mt={30}
				bg={"#000"}
				h={{ base: 696, sm: 1042, lg: 696 }}
			>
				<Grid>
					<Grid.Col span={{ base: 12, lg: 6 }} order={{ base: 2, lg: 1 }}>
						<Text
							fz={{ lg: 14, base: 10, sm: 14 }}
							fw={600}
							ml={{ lg: 114, base: 17, sm: 144 }}
							mt={{ lg: 191, base: 48, sm: 30 }}
							c={"#E4E8ED"}
						>
							WHO ARE WE ?
						</Text>
						<Text
							fz={{ lg: 32, base: 18, sm: 32 }}
							w={{ lg: 562, base: 210, sm: 691 }}
							fw={600}
							ml={{ lg: 114, base: 17, sm: 144 }}
							mt={{ lg: 16, base: 8, sm: 16 }}
							c={"#E4E8ED"}
						>
							How it all began: The Omega moment
						</Text>
						<Text
							fz={{ lg: 16, base: 12, sm: 14 }}
							fw={400}
							w={{ lg: 562, base: 328, sm: 736 }}
							ml={{ lg: 118, base: 16, sm: 144 }}
							mt={16}
							c={"#E4E8ED"}
						>
							Launching a business isn't easy, which is why having a co-founder can often make
							things a little smoother, especially if that co-founder is your best friend. While
							many professionals warn against choosing a close friend as your business partner,
							there are plenty of examples that prove it can work. The best example is of Airbnb..
						</Text>
						<UnstyledButton ml={{ lg: 118, base: 16, sm: 144 }} mt={{ lg: 40, base: 32 }}>
							<Text fz={{ lg: 20, base: 16, sm: 20 }} fw={400} style={{ color: "#F6F6F6" }}>
								About Libratherm
							</Text>
						</UnstyledButton>
					</Grid.Col>
					<Grid.Col span={{ base: 12, lg: 6 }} order={{ base: 1, lg: 2 }}>
						<Image
							src={RectangleOmega}
							h={{ lg: 696, base: 289, sm: 696 }}
							ml={{ lg: 209, base: 102, sm: 522 }}
							w={{ sm: 508 }}
						/>
						<Image
							pos={"absolute"}
							src={WHO}
							w={{ lg: 493, base: 327, sm: 736 }}
							h={{ lg: 451, base: 241, sm: 541 }}
							ml={{ lg: 123, base: 17, sm: 144 }}
							mt={{ lg: -580, base: -265, sm: -600 }}
						/>
					</Grid.Col>
				</Grid>
			</Paper>
			{/**Mobile view */}
			{/* <Grid justify="flex-start" bg={"#000"} hiddenFrom="xs" pb={56} maw={360}>
				<Grid.Col span={12}>
					<Image src={WHO} w={327} h={241} pos={"absolute"} mt={70} ml={17} />
					<Image src={RectangleOmegaMob} h={289} w={258} ml={102} mt={46} />
				</Grid.Col>
				<Grid.Col span={12}>
					<Text fz={10} fw={600} ml={17} mt={24} c={"#E4E8ED"}>
						WHO ARE WE ?
					</Text>
					<Text fz={18} w={199} fw={600} ml={17} mt={8} c={"#f6f6f6"}>
						How it all began: <br />
						The Omega moment
					</Text>
					<Text fz={12} fw={400} w={328} ml={17} mt={16} c={"#E4E8ED"}>
						Launching a business isn't easy, which is why having a co-founder can often make things
						a little smoother, especially if that co-founder is your best friend. While many
						professionals warn against choosing a close friend as your business partner, there are
						plenty of examples that prove it can work. The best example is of Airbnb..
					</Text>
					<UnstyledButton ml={16} mt={32}>
						<Text fz={20} fw={400} c={"#f6f6f6"} ff={"Fjalla One"}>
							About Libratherm
						</Text>
					</UnstyledButton>
				</Grid.Col>
			</Grid> */}

			{/**Tablet view */}
			{/* <Grid justify="flex-start" bg={"#000"} hiddenFrom="md" visibleFrom="xs" pb={56} w={768}>
				<Grid.Col span={12}>
					<Image src={WHO} w={550} h={441} pos={"absolute"} mt={30} ml={90} />
					<Image src={RectangleOmegaMob} h={506} w={511} ml={235} />
				</Grid.Col>
				<Grid.Col span={12}>
					<Text fz={14} fw={600} ml={90} mt={36} c={"#E4E8ED"}>
						WHO ARE WE ?
					</Text>
					<Text fz={32} fw={600} ml={90} mt={8} c={"#f6f6f6"}>
						How it all began: <br />
						The Omega moment
					</Text>
					<Text fz={12} fw={400} w={588} ml={90} mt={16} c={"#E4E8ED"}>
						Launching a business isn't easy, which is why having a co-founder can often make things
						a little smoother, especially if that co-founder is your best friend. While many
						professionals warn against choosing a close friend as your business partner, there are
						plenty of examples that prove it can work. The best example is of Airbnb..
					</Text>
					<UnstyledButton ml={90} mt={32}>
						<Text fz={24} fw={400} c={"#f6f6f6"} ff={"Fjalla One"}>
							About Libratherm
						</Text>
					</UnstyledButton>
				</Grid.Col>
			</Grid> */}
		</>
	);
};

export default WhoAreWe;
