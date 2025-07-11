import React from "react";
import { User, Eye, Download, Share2, Printer } from "lucide-react";
import Image from "next/image";

interface ChildCardProps {
  name?: string;
  gender?: string;
  roll?: string;
  admissionId?: string;
  admissionDate?: string;
  className?: string;
  section?: string;
  childImage?: string;
}

const ChildCard: React.FC<ChildCardProps> = ({
  name,
  gender,
  roll,
  admissionId,
  admissionDate,
  className,
  section,
  childImage,
}) => {
  return (
    <div
      className="w-full rounded-lg shadow-lg overflow-hidden"
      style={{ backgroundColor: "#161b22" }}
    >
      {/* Header */}
      <div
        className="px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between"
        style={{ borderBottom: "1px solid #30363d" }}
      >
        <h1
          className="text-lg sm:text-xl font-semibold"
          style={{ color: "#e6edf3" }}
        >
          Child ID: {admissionId}
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row p-4 sm:p-6 gap-4 sm:gap-6">
        {/* Profile Image */}
        <div className="flex-shrink-0 flex flex-col items-center lg:items-start">
          <div
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-lg flex items-center justify-center overflow-hidden"
            style={{ backgroundColor: "#1f6feb" }}
          >
            {childImage ? (
              <Image
                src={childImage}
                alt={name ?? "Child image"}
                className="w-full h-full object-cover"
              />
            ) : (
              <div
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#e6edf3" }}
              >
                <User
                  size={window.innerWidth < 640 ? 40 : 48}
                  style={{ color: "#1f6feb" }}
                />
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-2 sm:space-x-3 mt-4 w-full">
            <button
              className="p-2 rounded transition-colors flex-1 sm:flex-none"
              style={{
                backgroundColor: "#30363d",
                color: "#7d8590",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#1a64d1";
                e.currentTarget.style.color = "#e6edf3";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#30363d";
                e.currentTarget.style.color = "#7d8590";
              }}
            >
              <Eye size={16} />
            </button>
            <button
              className="p-2 rounded transition-colors flex-1 sm:flex-none"
              style={{
                backgroundColor: "#30363d",
                color: "#7d8590",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#1a64d1";
                e.currentTarget.style.color = "#e6edf3";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#30363d";
                e.currentTarget.style.color = "#7d8590";
              }}
            >
              <Printer size={16} />
            </button>
            <button
              className="p-2 rounded transition-colors flex-1 sm:flex-none"
              style={{
                backgroundColor: "#30363d",
                color: "#7d8590",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#1a64d1";
                e.currentTarget.style.color = "#e6edf3";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#30363d";
                e.currentTarget.style.color = "#7d8590";
              }}
            >
              <Download size={16} />
            </button>
            <button
              className="p-2 rounded transition-colors flex-1 sm:flex-none"
              style={{
                backgroundColor: "#30363d",
                color: "#7d8590",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#1a64d1";
                e.currentTarget.style.color = "#e6edf3";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#30363d";
                e.currentTarget.style.color = "#7d8590";
              }}
            >
              <Share2 size={16} />
            </button>
          </div>
        </div>

        {/* Information */}
        <div className="flex-1 space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center">
            <span
              className="w-full sm:w-32 text-sm font-medium sm:font-normal"
              style={{ color: "#7d8590" }}
            >
              Name :
            </span>
            <span
              className="text-base font-medium sm:ml-8 mt-1 sm:mt-0"
              style={{ color: "#e6edf3" }}
            >
              {name}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center">
            <span
              className="w-full sm:w-32 text-sm font-medium sm:font-normal"
              style={{ color: "#7d8590" }}
            >
              Gender :
            </span>
            <span
              className="text-base font-medium sm:ml-8 mt-1 sm:mt-0"
              style={{ color: "#e6edf3" }}
            >
              {gender}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center">
            <span
              className="w-full sm:w-32 text-sm font-medium sm:font-normal"
              style={{ color: "#7d8590" }}
            >
              Roll :
            </span>
            <span
              className="text-base font-medium sm:ml-8 mt-1 sm:mt-0"
              style={{ color: "#e6edf3" }}
            >
              {roll}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center">
            <span
              className="w-full sm:w-32 text-sm font-medium sm:font-normal"
              style={{ color: "#7d8590" }}
            >
              Admission ID :
            </span>
            <span
              className="text-base font-medium sm:ml-8 mt-1 sm:mt-0"
              style={{ color: "#e6edf3" }}
            >
              {admissionId}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center">
            <span
              className="w-full sm:w-32 text-sm font-medium sm:font-normal"
              style={{ color: "#7d8590" }}
            >
              Admission Date :
            </span>
            <span
              className="text-base font-medium sm:ml-8 mt-1 sm:mt-0"
              style={{ color: "#e6edf3" }}
            >
              {admissionDate}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center">
            <span
              className="w-full sm:w-32 text-sm font-medium sm:font-normal"
              style={{ color: "#7d8590" }}
            >
              Class : 
            </span>
            <span
              className="text-base font-medium sm:ml-8 mt-1 sm:mt-0"
              style={{ color: "#e6edf3" }}
            >
              {className}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center">
            <span
              className="w-full sm:w-32 text-sm font-medium sm:font-normal"
              style={{ color: "#7d8590" }}
            >
              Section :
            </span>
            <span
              className="text-base font-medium sm:ml-8 mt-1 sm:mt-0"
              style={{ color: "#e6edf3" }}
            >
              {section}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildCard;
