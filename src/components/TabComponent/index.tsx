import type { TabsProps } from "antd"
import { Tabs } from "antd"
import React from "react"
import "./style.scss"

interface TabComponentProps {
  items: TabsProps["items"]
  onChange: (key: string) => void
}

const TabComponent: React.FC<TabComponentProps> = ({ items, onChange }) => (
  <Tabs
    className="tab-component"
    defaultActiveKey="1"
    items={items}
    onChange={onChange}
  />
)

export default TabComponent
