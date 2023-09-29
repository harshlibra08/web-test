import { Paper, Container, Grid, Text, Image } from "@mantine/core";
import React from "react";
import OurTeams from "./Assets/team.png";
type Props = {};

const OurTeam = (props: Props) => {
	return (
		<Paper w={1440} h={748} withBorder style={{ backgroundColor: "black" }}>
			<Container>
				<Grid gutter="lg">
					<Grid.Col span={6}>
						<Paper pos={"initial"}>
							<Image
								src={OurTeams}
								alt="prc"
								width={493}
								height={389}
								left={0}
								pos="absolute"
								pl={114}
								ml={0}
								pt={140}
							/>
						</Paper>
					</Grid.Col>

					<Grid.Col span={6}>
						<Text size="32px" w={374} h={102} fw={600} mt={140} color="#FFF">
							Our Team
						</Text>
						<Text h={44} w={596} color="#FFFFFF" size="sm" fw={400}>
							Our core team comprises of people having the skill, competency, experience, and
							willingness with the zeal to excel in every assignment keeping the focus on our core
							purpose and core values.Our highly qualified and trained professionals assist us in
							effectively and efficiently undertaking our varied business operations.
							<br />
							<br />
							We face every challenge to overcome the impediments for successful execution and
							implementation of the designed system within our company. We make sure to pass the
							benefits of our skills, knowledge, experience, and wisdom to our employees and the
							associates. The legacy of our vision will continue, in spite of reaching the pinnacle
							of our growth and change of generation. We will be committed to doing the business in
							the right way.
						</Text>
					</Grid.Col>
				</Grid>
			</Container>
		</Paper>
	);
};

export default OurTeam;
