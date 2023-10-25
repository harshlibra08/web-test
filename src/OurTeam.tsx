import { Paper, Container, Grid, Text, Image } from "@mantine/core";
import React from "react";
import OurTeams from "./Assets/team.png";
type Props = {};

const OurTeam = (props: Props) => {
	return (
		<Paper w={1440} h={679} bg={"#000"} visibleFrom="xs">
			<Grid>
				<Grid.Col span={6}>
					<Image src={OurTeams} pos={"absolute"} left={0} ml={114} mt={140} w={493} h={389} />
				</Grid.Col>

				<Grid.Col span={6}>
					<Text fz={32} w={374} fw={600} mt={157} style={{ color: "#FFFFFF" }}>
						Our Team
					</Text>
					<Text style={{ color: "#E4E8ED" }} mt={24} fz={16} fw={700} w={592}>
						Our core team comprises of people having the skill, competency, experience, and
						willingness with the zeal to excel in every assignment keeping the focus on our core
						purpose and core values.Our highly qualified and trained professionals assist us in
						effectively and efficiently undertaking our varied business operations.
					</Text>
					<br />
					<Text style={{ color: "#E4E8ED" }} fz={16} fw={400} w={592}>
						We face every challenge to overcome the impediments for successful execution and
						implementation of the designed system within our company. We make sure to pass the
						benefits of our skills, knowledge, experience, and wisdom to our employees and the
						associates. The legacy of our vision will continue, in spite of reaching the pinnacle of
						our growth and change of generation. We will be committed to doing the business in the
						right way.
					</Text>
				</Grid.Col>
			</Grid>
		</Paper>
	);
};

export default OurTeam;
