import { Paper, Container, Grid, Text, Image, UnstyledButton } from "@mantine/core";
import React from "react";
import OurTeams from "./Assets/team.png";
type Props = {};

const OurTeam = (props: Props) => {
	return (
		<>
			<Paper w={{ base: 360 }} h={{ base: 555 }} bg={"#000"} mt={{ base: 30 }}>
				<Grid>
					<Grid.Col span={{ base: 12 }}>
						<Image
							src={OurTeams}
							pos={"absolute"}
							left={0}
							ml={{ base: 17 }}
							mt={{ base: 24 }}
							w={{ base: 327 }}
							h={{ base: 241 }}
						/>
					</Grid.Col>

					<Grid.Col span={{ base: 12 }}>
						<Text
							fz={{ base: 20 }}
							w={374}
							fw={600}
							ml={{ base: 16 }}
							mt={{ base: 284 }}
							style={{ color: "#FFFFFF" }}
						>
							Our Team
						</Text>
						<Text
							c={"#e4e8ed"}
							mt={24}
							fz={{ base: 12 }}
							fw={400}
							ml={{ base: 16 }}
							w={{ base: 328 }}
						>
							Launching a business isn't easy, which is why having a co-founder can often make
							things a little smoother, especially if that co-founder is your best friend. While
							many professionals warn against choosing a close friend as your business partner,
							there are plenty of examples that prove it can work. The best example is of Airbnb..
						</Text>
					</Grid.Col>
				</Grid>
			</Paper>

			{/**MOBILE VIEW */}
			{/* <Paper w={360} h={679} bg={"#000"} hiddenFrom="xs">
				<Grid justify="flex-start" bg={"#000"} hiddenFrom="xs" pb={56} maw={360}>
					<Grid.Col span={12}>
						<Image src={OurTeams} w={327} h={241} pos={"absolute"} mt={70} ml={17} />
					</Grid.Col>
					<Grid.Col span={12}>
						<Text fz={18} w={199} fw={600} ml={17} c={"#f6f6f6"} mt={353}>
							Our Team
						</Text>
						<Text fz={12} fw={400} w={328} ml={17} c={"#E4E8ED"} mt={16}>
							Our core team comprises of people having the skill, competency, experience, and
							willingness with the zeal to excel in every assignment keeping the focus on our core
							purpose and core values.Our highly qualified and trained professionals assist us in
							effectively and efficiently undertaking our varied business operations.
						</Text>
					</Grid.Col>
				</Grid>
			</Paper> */}

			{/**Tablet VIEW */}
			{/* <Paper w={768} h={690} bg={"#000"} visibleFrom="xs" hiddenFrom="md">
				<Grid justify="flex-start" bg={"#000"} hiddenFrom="md" visibleFrom="xs" w={768}>
					<Grid.Col span={12}>
						<Image src={OurTeams} w={588} h={355} pos={"absolute"} mt={63} ml={90} />
					</Grid.Col>
					<Grid.Col span={12}>
						<Text fz={32} fw={600} ml={90} mt={458} c={"#f6f6f6"}>
							Our Team
						</Text>
						<Text fz={12} fw={400} w={588} ml={90} mt={16} c={"#E4E8ED"}>
							Launching a business isn't easy, which is why having a co-founder can often make
							things a little smoother, especially if that co-founder is your best friend. While
							many professionals warn against choosing a close friend as your business partner,
							there are plenty of examples that prove it can work. The best example is of Airbnb..
						</Text>
					</Grid.Col>
				</Grid>
			</Paper> */}
		</>
	);
};

export default OurTeam;
