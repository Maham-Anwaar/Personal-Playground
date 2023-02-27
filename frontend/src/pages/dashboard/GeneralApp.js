import { Container } from '@mui/material'
import useSettings from '../../hooks/useSettings'
// routes
import { PATH_DASHBOARD } from '../../routes/paths'

// components
import Page from '../../components/Page'
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs'

export default function GeneralApp() {
  const { themeStretch } = useSettings()

  const isCalendarPage = window.location.pathname.includes('calendar');
  return (
    <Page title="App: Frontend">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs heading="Welcome" links={[{ name: 'Home', href: PATH_DASHBOARD.root }]} />
      </Container>
      {isCalendarPage && <div className={"bg-green-500 text-white text-center py-2 px-4 rounded-md"}>Calendar is here!</div>}
    </Page>
  )
}
