import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "skYTCrPDOdiM4bcqKt4emuELgAolPNP9qA6WlQz4B935Rj8i1X0oST36OYNvyWLk1QQ3smFweTBBGS00ECvAkbSIxoHFbCMeCOIQoCE5nayx5iiC70XEvF4jYy3il8kBRF6t827YSsfEmpAMOdrtLtHPEEx3m0238KoN9PCMJV82t65ZQKgr"
})
