import React from 'react'
import { GetStaticProps, NextPage } from 'next'
import { Avatar, Box, Card, Heading, Text } from 'dracula-ui'
import styles from './resume.module.scss'

interface ResumePageProps {
  personalData: {
    name: string
    address: string
  }
}

const ResumePage: NextPage<ResumePageProps> = (props: ResumePageProps) => {
  const { personalData } = props
  return (
    <Box className={styles.boxContainer} borderColor="pink" rounded="sm" scrollbar={false}>
      <Card width="sm" variant="subtle">
        <Avatar title="Count Dracula" src="https://ui.draculatheme.com/static/images/avatar.png" />
        <Heading size="lg">{personalData.name}</Heading>
        <Heading size="sm">{personalData.address}</Heading>
      </Card>
      <Box>
        <Heading size="md">Apresentação</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe qui doloribus assumenda eligendi sed?
          Exercitationem modi dolor unde, quia repellendus quibusdam minima nostrum temporibus, aliquid vero saepe
          mollitia omnis odio.
        </Text>
      </Box>
    </Box>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const myResume = {
    personalData: {
      name: 'Belclei Fasolo',
      address: 'Porto Alegre - RS'
    }
  }

  return {
    props: myResume,
    revalidate: 60 * 5 // 5 minutos
  }
}

export default ResumePage
