/*
const stitches_model = {
	womens: {
		s: PropTypes.number.isRequired,
		m: PropTypes.number.isRequired,
		l: PropTypes.number.isRequired
	},
	mens: {
		m: PropTypes.number.isRequired,
		l: PropTypes.number.isRequired
	}
};

const instructions_model = {
	womens_only: PropTypes.bool,
	mens_only: PropTypes.bool,
	text: PropTypes.string.isRequired,
	stitches: PropTypes.stitches_model
};

const row_model = {
	title: PropTypes.string,
	wide_only: PropTypes.bool,
	stitch_count: PropTypes.stitches_model,
	instructions: PropTypes.instructions_model.isRequired
};
{
	title: 'Row ',
	'final_stitch_count': {
		womens: {
			s: ,
			m: ,
			l:
		},
		mens: {
			m: ,
			l:
		}
	},
	instructions: [
		{
			text: '',
			stitches:  {
				womens: {
					s: ,
					m: ,
					l:
				},
				mens: {
					m: ,
					l:
				}
			}
		},
		{
			text: ', ',
			stitches:  {
				womens: {
					s: ,
					m: ,
					l:
				},
				mens: {
					m: ,
					l:
				}
			}
		},
		{
			text: ', m1, k1.'
		}
	]
}
*/

export const felted_slippers = {
  sole: [
    {
      title: 'Casting On',
      final_stitch_count: {
        womens: {
          s: 51,
          m: 57,
          l: 63,
        },
        mens: {
          m: 63,
          l: 69,
        },
      },
      instructions: [
        {
          text: 'Begin at center of sole. With a double strand of sole color and longer circular needle, loosely cast on ',
          stitches: {
            womens: {
              s: 51,
              m: 57,
              l: 63,
            },
            mens: {
              m: 63,
              l: 69,
            },
          },
        },
        {
          text: ' stitches. Do not join, sole is worked back and forth.',
        },
      ],
    },
    {
      title: 'Extra-Width Row',
      wide_only: true,
      final_stitch_count: {
        womens: {
          s: 51,
          m: 57,
          l: 63,
        },
        mens: {
          m: 63,
          l: 69,
        },
      },
      instructions: [
        {
          text: 'To fit a wide foot, knit an extra row after casting on. For a narrow foot, skip and begin with Row 1.',
        },
      ],
    },
    {
      title: 'Row 1',
      final_stitch_count: {
        womens: {
          s: 59,
          m: 65,
          l: 71,
        },
        mens: {
          m: 71,
          l: 77,
        },
      },
      instructions: [
        {
          text: 'k1, m1, k',
          stitches: {
            womens: {
              s: 24,
              m: 27,
              l: 30,
            },
            mens: {
              m: 30,
              l: 33,
            },
          },
        },
        {
          text: ', m1, k1, m1, k',
          stitches: {
            womens: {
              s: 14,
              m: 15,
              l: 16,
            },
            mens: {
              m: 16,
              l: 17,
            },
          },
        },
        {
          text: ', w&t, k',
          stitches: {
            womens: {
              s: 31,
              m: 33,
              l: 35,
            },
            mens: {
              m: 35,
              l: 37,
            },
          },
        },
        {
          text: ', w&t, k',
          stitches: {
            womens: {
              s: 13,
              m: 14,
              l: 15,
            },
            mens: {
              m: 15,
              l: 16,
            },
          },
        },
        {
          text: ', m1, k2, m1, k1, m1, k2, m1, k',
          stitches: {
            womens: {
              s: 23,
              m: 26,
              l: 29,
            },
            mens: {
              m: 29,
              l: 32,
            },
          },
        },
        {
          text: ', m1, k1.',
        },
      ],
    },
    {
      title: 'Row 2',
      final_stitch_count: {
        womens: {
          s: 59,
          m: 65,
          l: 71,
        },
        mens: {
          m: 71,
          l: 77,
        },
      },
      instructions: [
        {
          text: 'Knit.',
        },
      ],
    },
    {
      title: 'Row 3',
      final_stitch_count: {
        womens: {
          s: 67,
          m: 73,
          l: 79,
        },
        mens: {
          m: 85,
          l: 91,
        },
      },
      instructions: [
        {
          text: 'k1, m1, k',
          stitches: {
            womens: {
              s: 24,
              m: 27,
              l: 30,
            },
            mens: {
              m: 30,
              l: 33,
            },
          },
        },
        {
          text: ', [m1, k2]2x, m1, k1, m1, [k2, m1]2x, k',
          stitches: {
            womens: {
              s: 24,
              m: 27,
              l: 30,
            },
            mens: {
              m: 26,
              l: 29,
            },
          },
        },
        {
          mens_only: true,
          text: ', w&t, k',
          stitches: {
            mens: {
              m: 67,
              l: 73,
            },
          },
        },
        {
          mens_only: true,
          text: ', w&t, k',
          stitches: {
            mens: {
              m: 25,
              l: 28,
            },
          },
        },
        {
          mens_only: true,
          text: ', [m1, k4]2x, m1, k1, m1, [k4, m1]2x, k',
          stitches: {
            mens: {
              m: 29,
              l: 32,
            },
          },
        },
        {
          womens_only: true,
          text: ', m1, k2, m1, k1, m1, k2, m1, k',
          stitches: {
            womens: {
              s: 24,
              m: 27,
              l: 30,
            },
          },
        },
        {
          text: ', m1, k1.',
        },
      ],
    },
    {
      title: 'Row 4',
      final_stitch_count: {
        womens: {
          s: 67,
          m: 73,
          l: 79,
        },
        mens: {
          m: 85,
          l: 91,
        },
      },
      instructions: [
        {
          text: 'Knit.',
        },
      ],
    },
    {
      title: 'Row 5',
      final_stitch_count: {
        womens: {
          s: 79,
          m: 85,
          l: 91,
        },
        mens: {
          m: 97,
          l: 103,
        },
      },
      instructions: [
        {
          text: '[k2, m1]2x, k',
          stitches: {
            womens: {
              s: 19,
              m: 22,
              l: 25,
            },
            mens: {
              m: 28,
              l: 31,
            },
          },
        },
        {
          text: '[m1, k3]7x, m1, k',
          stitches: {
            womens: {
              s: 19,
              m: 22,
              l: 25,
            },
            mens: {
              m: 28,
              l: 31,
            },
          },
        },
        {
          text: ', [m1, k2]2x.',
        },
      ],
    },
    {
      title: 'Row 6',
      final_stitch_count: {
        womens: {
          s: 79,
          m: 85,
          l: 91,
        },
        mens: {
          m: 97,
          l: 103,
        },
      },
      instructions: [
        {
          text: 'Knit. This completes the sole.',
        },
      ],
    },
  ],
  upper_clog: [],
  cuff: [],
  outer_sole: [],
};
