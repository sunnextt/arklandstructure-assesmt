import styled from 'styled-components';

const PaginationCtx = styled.div`
    .pagination-container {
        display: flex;
        list-style-type: none;

        .pagination-item {
            padding: 0 12px;
            height: 32px;
            text-align: center;
            margin: auto 4px;
            color: rgba(0, 0, 0, 0.87);
            display: flex;
            box-sizing: border-box;
            align-items: center;
            letter-spacing: 0.01071em;
            border-radius: 3px;
            line-height: 1.43;
            font-size: 14px;
            min-width: 32px;
            background: #e5e5e5;
            box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.1);

            &.dots:hover {
                background-color: transparent;
                cursor: default;
            }
            &:hover {
                background-color: rgba(0, 0, 0, 0.04);
                cursor: pointer;
            }

            &.selected {
                color: #fff;
                background-color: #03009e;
            }

            .arrow {
                &::before {
                    position: relative;
                    /* top: 3pt; Uncomment this to lower the icons as requested in comments*/
                    content: '';
                    /* By using an em scale, the arrows will size with the font */
                    display: inline-block;
                    width: 0.4  em;
                    height: 0.4em;
                    border-right: 0.12em solid rgba(0, 0, 0, 0.87);
                    border-top: 0.12em solid rgba(0, 0, 0, 0.87);
                }

                &.left {
                    transform: rotate(-135deg) translate(-50%);
                }

                &.right {
                    transform: rotate(45deg);
                }
            }

            &.disabled {
                pointer-events: none;

                .arrow::before {
                    border-right: 0.12em solid rgba(0, 0, 0, 0.43);
                    border-top: 0.12em solid rgba(0, 0, 0, 0.43);
                }

                &:hover {
                    background-color: transparent;
                    cursor: default;
                }
            }
        }

        .arrow-icon {
            background: transparent;
            border: none;
            box-shadow: none;
        }
    }
`;

export default PaginationCtx;
