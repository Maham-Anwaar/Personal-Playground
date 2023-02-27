import { Container } from '@mui/material'
import useSettings from '../../hooks/useSettings'
// routes
import { PATH_DASHBOARD } from '../../routes/paths'

// components
import Page from '../../components/Page'
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs'
import CalendarMain from './CalendarMain'

export default function GeneralApp() {
  const { themeStretch } = useSettings()

  const isCalendarPage = window.location.pathname.includes('calendar');
  const isMainPage = window.location.pathname.includes('app');
  
  return (
    <Page title="App: Frontend">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        {isMainPage && <HeaderBreadcrumbs heading="Welcome" links={[{ name: 'Home', href: PATH_DASHBOARD.root }]} />}
        {isCalendarPage && <CalendarMain/>}
      </Container>
    </Page>
  )
}
