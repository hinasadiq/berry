import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

// assets
// import { IconAdjustmentsHorizontal } from '@tabler/icons-react';

// const HeaderAvatar = forwardRef(({ children, ...others }, ref) => {
//   const theme = useTheme();

//   return (
//     <Avatar
//       ref={ref}
//       variant="rounded"
//       sx={{
//         ...theme.typography.commonAvatar,
//         ...theme.typography.mediumAvatar,
//         bgcolor: 'secondary.light',
//         color: 'secondary.dark',
//         '&:hover': {
//           bgcolor: 'secondary.dark',
//           color: 'secondary.light'
//         }
//       }}
//       {...others}
//     >
//       {children}
//     </Avatar>
//   );
// });

// HeaderAvatar.propTypes = {
//   children: PropTypes.node
// };

// // ==============================|| SEARCH INPUT ||============================== //

// const SearchSection = () => {
//   return (
//     <Box sx={{ display: 'flex', alignItems: 'center' }}>
     
//     </Box>
//   );
// };

// export default SearchSection;
import React from 'react'
import { Typography } from '@mui/material';

const index = () => {
  return (
    <Box sx={{ ml: 4 }}>
    <div>
      <Typography variant='h3'>Company Name</Typography>
     
    </div>
    </Box>
  )
}

export default index