export const CustomSvg = ({ name, size = '24', ...props }) => {
  switch (name) {
    case 'motorcycle':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          enableBackground='new 0 0 24 24'
          height={size}
          viewBox='0 0 24 24'
          width={size}
          {...props}>
          <g>
            <rect fill='none' height={size} width={size} />
          </g>
          <g>
            <g>
              <path d='M19,7c0-1.1-0.9-2-2-2h-3v2h3v2.65L13.52,14H10V9H6c-2.21,0-4,1.79-4,4v3h2c0,1.66,1.34,3,3,3s3-1.34,3-3h4.48L19,10.35V7 z M7,17c-0.55,0-1-0.45-1-1h2C8,16.55,7.55,17,7,17z' />
              <rect height='2' width='5' x='5' y='6' />
              <path d='M19,13c-1.66,0-3,1.34-3,3s1.34,3,3,3s3-1.34,3-3S20.66,13,19,13z M19,17c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1 S19.55,17,19,17z' />
            </g>
          </g>
        </svg>
      )
    case 'price-tag':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height={size}
          viewBox='0 0 24 24'
          width={size}
          {...props}>
          <path d='M0 0h24v24H0z' fill='none' />
          <path d='M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z' />
        </svg>
      )
    case 'pizza-slice':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height={size}
          viewBox='0 0 24 24'
          width={size}
          {...props}>
          <path d='M0 0h24v24H0z' fill='none' />
          <path d='M12 2C8.43 2 5.23 3.54 3.01 6L12 22l8.99-16C18.78 3.55 15.57 2 12 2zM7 7c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm5 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z' />
        </svg>
      )
  }
}
