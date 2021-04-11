import { Box } from '@material-ui/core';
import React, { useEffect } from 'react'

/**
 * @return {<p></p>} It renders when there is nothing to show for a user or the repositories are 0
 */
function NoRepos(){
    return(
    <Box>
        <p>Nothing to show rightnow. Please search for a different user instead.</p> 
    </Box>
    )
}

export default NoRepos;